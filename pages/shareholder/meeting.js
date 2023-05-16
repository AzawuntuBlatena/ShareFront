import Head from 'next/head';
import Layout from '../shareholder';
import { useState, useEffect } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

export default function MeetingsPage() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetch('/api/meetings')
      .then((res) => res.json())
      .then((data) => setMeetings(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Meetings</title>
      </Head>
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-medium text-gray-800 mb-8">Meetings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow">
              <div className="flex items-center mb-4">
                <FaRegCalendarAlt className="text-gray-500 mr-2" size={20} />
                <h2 className="text-lg font-medium text-gray-800">title{meeting.title}</h2>
              </div>
              <p className="text-sm text-gray-500 mb-2">{meeting.time}</p>
              <p className="text-sm text-gray-500 mb-2">{meeting.place}</p>
              <p className="text-sm text-gray-500 mb-2">{meeting.subject}</p>
              <div className="flex items-center mt-4">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src={`https://i.pravatar.cc/100?u=${meeting.id}`} alt={meeting.host} />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{meeting.host}</p>
                  <p className="text-sm text-gray-500">{`Attendees: ${meeting.attendees.join(', ')}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
// ```

// Here are the changes we made to the component:

// 1. We imported the `FaRegCalendarAlt` icon from the `react-icons/fa` package to use as a decorative icon for each meeting title.

// 2. We added a `flex` container and `items-center` class to the meeting title and icon to align them horizontally.

// 3. We added a new `img` tag to display the host's avatar image and used the `pravatar.cc` service to generate a random avatar image based on the meeting `id`.

// 4. We added a `font-medium` class to the host name to make it stand out more.

// 5. We improved the layout of the component by adding some margins and using flexbox to align the host avatar and attendees information horizontally.

// 6. We added some new colors to the Tailwind CSS configuration to make the component more visually appealing:

//    ```json
//    {
//      "gray": {
//        "100": "#F7FAFC",
//        "200": "#EDF2F7",
//        "300": "#E2E8F0",
//        "400": "#CBD5E0",
//        "500": "#A0AEC0",
//        "600": "#718096",
//        "700": "#4A5568",
//        "800": "#2D3748",
//        "900": "#1A202C"
//      },
//      "blue": {
//        "500": "#4299E1"
//      },
//      "green": {
//        "500": "#48BB78"
//      }
//    }
// //    ```

// // //    You can add these colors to your `tailwind.config.js` file or directly to the `styles/globals.css` file.

// // // With these changes, the [Meetings page](poe://www.poe.com/_api/key_phrase?phrase=Meetings%20page&prompt=Tell%20me%20more%20about%20Meetings%20page.) should look more attractive and advanced. You can also experiment with other [Tailwind CSS](poe://www.poe.com/_api/key_phrase?phrase=Tailwind%20CSS&prompt=Tell%20me%20more%20about%20Tailwind%20CSS.) classes and components to further customize the layout and styling of the page.