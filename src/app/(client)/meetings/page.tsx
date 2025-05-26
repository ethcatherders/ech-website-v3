'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import PageContainer from "@/components/ui/pageContainer";
import Heading from "@/components/ui/Heading";
import Content from "@/components/ui/content";
import { getPublicMeetingCategories } from "@/app/_action";

export default function Meetings() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getPublicMeetingCategories();
        setCategories(result || []);
      } catch (error) {
        console.error("Error fetching meeting categories:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Function to convert category name to URL slug
  const getCategorySlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <PageContainer>
      <Heading text="Ethereum Meetings" />

      <Content>
        The Ethereum community hosts regular meetings to discuss development progress, research updates, 
        and technical decisions. These meetings are recorded and documented to ensure transparency and 
        facilitate community participation.
      </Content>

      <div className="pt-8">
        <h1 className="xl:text-6xl lg:text-4xl sm:text-4xl text-3xl text-center font-roboto font-bold text-darkGray">
          Meeting Categories
        </h1>
        
        {loading ? (
          <p className="text-lightGray pt-4">Loading meeting categories...</p>
        ) : categories.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
            {categories.map((category) => (
              <Link 
                href={`/meetings/${getCategorySlug(category.name)}`} 
                key={category.id}
                className="box-black-bg rounded-xl border-2 border-black p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-medium text-darkGray">{category.name}</h3>
                {category.description && (
                  <p className="text-lightGray">{category.description}</p>
                )}
                <div className="mt-auto text-sm font-medium text-primary">
                  View meetings →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-lightGray">No meeting categories found.</p>
        )}
      </div>

      <div className="my-8 box-black-bg rounded-xl border-2 border-black p-6 mb-8">
        <h2 className="text-xl font-medium text-darkGray mb-3">About Ethereum Community Meetings</h2>
        <p className="text-lightGray mb-4">
          The Ethereum Cat Herders support these meetings by scheduling, recording, moderating, 
          documenting notes, and coordinating with client teams and community as needed.
        </p>
        <p className="text-lightGray">
          All meeting recordings are publicly available, and summaries are published to ensure that 
          everyone can stay informed about the development progress of Ethereum.
        </p>
      </div>
    </PageContainer>
  );
}
