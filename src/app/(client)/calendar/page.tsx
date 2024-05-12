'use client';

import Heading from "@/components/ui/Heading";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';


export default function CalendarPage() {
  return (
    <div className="flex justify-center min-h-screen w-full lg:pt-[25dvh] md:pt-[20dvh] pt-[15dvh]">
      <div className="max-w-[95vw] left-0">
        <div className="flex flex-col space-y-8">
          <Heading text="Calendar" />
          <div className="min-w-[80vw] h-[150vh] pb-10 left-0">
            <FullCalendar
              plugins={[ dayGridPlugin, googleCalendarPlugin ]}
              initialView="dayGridMonth"
              googleCalendarApiKey={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
              events={{
                googleCalendarId: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}