'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import PageContainer from "@/components/ui/pageContainer";
import Heading from "@/components/ui/Heading";
import { getPublicMeetingCategoryBySlug } from "@/app/_action";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = typeof params.categorySlug === 'string' ? params.categorySlug : '';
  
  const [category, setCategory] = useState<any>(null);
  const [meetings, setMeetings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!categorySlug) return;
      
      try {
        const categoryData = await getPublicMeetingCategoryBySlug(categorySlug);
        setCategory(categoryData);
        setMeetings(categoryData?.meetings || []);
      } catch (error) {
        console.error("Error fetching category:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [categorySlug]);

  if (loading) {
    return (
      <PageContainer>
        <p className="text-center py-8">Loading...</p>
      </PageContainer>
    );
  }

  if (!category) {
    return (
      <PageContainer>
        <div className="py-8">
          <h1 className="text-2xl font-bold text-center mb-4">Category Not Found</h1>
          <p className="text-center">
            <Link href="/meetings" className="text-primary hover:underline">
              Return to Meetings
            </Link>
          </p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="text-center">
        <Heading text={category.name} />
      </div>
      
      {/* Layout grid for side-by-side content */}
      <div className="my-8 grid md:grid-cols-4 gap-6">
        {/* Main content - takes up 3/4 width on medium screens and up */}
        <div className="md:col-span-3">
          {/* Introduction box */}
          <div className="box-black-bg rounded-xl border-2 border-black">
            <div className="p-6 space-y-4 flex flex-col justify-start items-center">
              <div className="flex flex-col space-y-1 text-center">
                <h1 className="text-2xl font-semibold">Introduction</h1>
              </div>
              
              <span>
                Welcome to the {category.name} section. Here you&apos;ll find detailed information about 
                specialized discussions and focused topics that complement our main meetings.
              </span>
              
              <span>
                These breakout sessions allow for deeper dives into specific subjects, providing more time 
                for detailed discussions and collaborative problem-solving.
              </span>
              
              <span>
                Browse through the categories below to access meeting notes, agendas, and video 
                recordings for each breakout session.
              </span>
            </div>
          </div>
        </div>
        
        {/* External Resources section - takes up 1/4 width on medium screens and up */}
        <div className="md:col-span-1">
          <div className="box-black-bg rounded-xl border-2 border-black h-full">
            <div className="p-4 space-y-4">
              <h3 className="font-semibold text-darkGray text-xl">External Resources</h3>
              <p className="text-lightGray italic">
                This feature will be available soon. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Meeting Calls Section */}
      <div className="my-8 box-black-bg rounded-xl border-2 border-black overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="meetings" className="border-none">
            <AccordionTrigger className="px-6 py-4 text-xl font-medium text-darkGray">
              Meeting Calls
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              {meetings.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {meetings.map((meeting) => (
                    <div key={meeting.id} className="py-4">
                      <h3 className="font-medium text-darkGray mb-2">{meeting.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        {meeting.issuesLink && (
                          <a 
                            href={meeting.issuesLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Issues
                          </a>
                        )}
                        {meeting.videoLink && (
                          <a 
                            href={meeting.videoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Video
                          </a>
                        )}
                        {meeting.notes && (
                          <a 
                            href={meeting.notes} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Notes
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-lightGray italic">No meetings found in this category.</p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="mb-8">
        <Link href="/meetings" className="text-primary hover:underline">
          ← Back to all meeting categories
        </Link>
      </div>
    </PageContainer>
  );
}
