import { useState } from 'react';
import { useAccount, useBalance, useChainId, usePublicClient, useSendTransaction, useWriteContract } from 'wagmi';
import { formatUnits, parseAbi, parseEther, parseUnits } from 'viem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { arbitrum, base, mainnet, optimism, polygon } from 'viem/chains';
import { toast } from './ui/use-toast';
import { waitForTransactionReceipt } from 'viem/actions';
import { Loader2 } from 'lucide-react';

const DONATION_ADDRESS = '0x8D3AcA27963D5BAD978d3e953D3F3680cEa3FAeC';

type Token = {
  name: string;
  decimals: number;
  symbol: string;
  address?: Record<number, string>;
};

const supportedTokens: Record<string, Token> = {
  'ETH': {
    name: 'Ethereum',
    decimals: 18,
    symbol: 'ETH'
  },
  'USDC': {
    name: 'USD Coin',
    decimals: 6,
    address: {
      [mainnet.id]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      [base.id]: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      [arbitrum.id]: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      [optimism.id]: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
      [polygon.id]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
    }, // Mainnet USDC
    symbol: 'USDC'
  },
  'DAI': {
    name: 'Dai',
    decimals: 18,
    address: {
      [mainnet.id]: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      [base.id]: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
      [arbitrum.id]: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      [optimism.id]: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      [polygon.id]: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'
    }, // Mainnet DAI
    symbol: 'DAI'
  }
};

export function DonationCard() {
  const { address, isConnected } = useAccount();
  const [selectedToken, setSelectedToken] = useState('ETH');
  const [amount, setAmount] = useState('');
  const [isSending, setIsSending] = useState(false);

  const chainId = useChainId();
  const client = usePublicClient();

  const { data: balance } = useBalance({
    chainId: chainId,
    address: address,
    token: selectedToken === 'ETH' ? undefined : supportedTokens[selectedToken].address as `0x${string}`,
  });

  const { writeContractAsync: writeERC20 } = useWriteContract();
  const { sendTransactionAsync: sendETH } = useSendTransaction();

  const handleSend = async () => {
    if (!amount || !isConnected) return;
    
    try {
      setIsSending(true);
      if (selectedToken === 'ETH') {
        // Handle ETH transfer using wagmi hooks
        console.log('Sending ETH', amount, 'to', DONATION_ADDRESS);
        const hash = await sendETH({
          to: DONATION_ADDRESS,
          value: parseEther(amount),
        });

        toast({
          title: 'Transaction Pending',
          description: `Your donation is being processed.`,
        });

        await waitForTransactionReceipt(client!, { hash });

        toast({
          title: 'Thank you for your donation!',
          description: `We received your donation of ${amount} ${selectedToken}.`,
        });
      } else {
        // For ERC20 tokens
        const decimals = supportedTokens[selectedToken].decimals;
        const parsedAmount = parseUnits(amount, decimals);
        
        const hash = await writeERC20({
          address: (supportedTokens[selectedToken].address as `0x${string}`),
          abi: parseAbi([
            "function transfer(address to, uint256 amount) returns (bool)",
          ]),
          functionName: 'transfer',
          args: [DONATION_ADDRESS, parsedAmount],
        });

        toast({
          title: 'Transaction Pending',
          description: `Your donation is being processed.`,
        });

        await waitForTransactionReceipt(client!, { hash });

        toast({
          title: 'Thank you for your donation!',
          description: `We received your donation of ${amount} ${selectedToken}.`,
        });
      }
    } catch (error) {
      console.error('Error sending tokens:', error);
      toast({
        title: 'Donation Failed',
        description: `An error occurred. Please try again.`,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className='text-center'>
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>
          Donate to the Ethereum Cat Herders at: <br /> <span className="text-[10px]">{DONATION_ADDRESS}</span>.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center mb-4">
          <ConnectButton showBalance={false} accountStatus={'avatar'} />
        </div>

        {isConnected && (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium">Currency</label>
              <Select
                value={selectedToken}
                onValueChange={(value) => setSelectedToken(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(supportedTokens).map(([key, token]) => (
                    <SelectItem key={key} value={key}>
                      {token.name} ({token.symbol})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {balance && (
                <p className="text-sm text-gray-500">
                  Balance: {formatUnits(balance.value, balance.decimals)} {balance.symbol}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Amount</label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <Button
              className="w-full bg-darkGray text-white hover:bg-darkGray/80"
              onClick={handleSend}
              disabled={!amount || !isConnected || isSending}
            >
              {isSending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Donation'
              )}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
} 