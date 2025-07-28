-- Add description column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = 'MeetingCategory' AND column_name = 'description'
    ) THEN
        ALTER TABLE "MeetingCategory" ADD COLUMN "description" TEXT DEFAULT '';
    END IF;
END$$;

-- Ensure initial categories exist
INSERT INTO "MeetingCategory" ("name", "description") 
VALUES 
('All Core Devs EL', 'Execution Layer meetings for Ethereum core developers')
ON CONFLICT (name) DO NOTHING;

INSERT INTO "MeetingCategory" ("name", "description") 
VALUES 
('All Core Devs CL', 'Consensus Layer meetings for Ethereum core developers')
ON CONFLICT (name) DO NOTHING;

INSERT INTO "MeetingCategory" ("name", "description") 
VALUES 
('Breakout Room Meetings', 'Smaller focused discussions on specific topics')
ON CONFLICT (name) DO NOTHING;
