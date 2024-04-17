import Heading from "@/components/ui/Heading";
import PageContainer from "@/components/ui/pageContainer";
import Content from "@/components/ui/content";
export default function MeetTheHerders() {
  return (
    <>
      <PageContainer>
        <Heading text="Meet the Herders" />
        <Content>
          Meet the Herders' is a series of interviews with past and present
          Ethereum Cat Herders(ECH) members. ECH helps coordinate upgrades and
          process imporvements to Ethereum by aligning multiple devs from
          protocol clients to application teams such as wallets; assisting
          indiciduals/teams to write EIP/ERC and informing the community as the
          landscape changes.
        </Content>
        <Heading text="Medium" />
        <div className="box-black-bg border-2 border-black rounded-xl grid grid-cols-3 p-4">
          <div className="col-span-2 border-r border-black pr-4">
            <embed
              src="https://medium.com/ethereum-cat-herders/meet-the-herders-victor-zhou-05ab54d89ddc"
              type="text/html"
            />
          </div>
        </div>
      </PageContainer>
    </>
  );
}
