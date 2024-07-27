function HouseRules({ place }) {
  return (
    <div>
      <p className="text-xl font-semibold mt-8">Things to know</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pb-2">
        <div>
          <p className="text-lg font-semibold mb-4">House Rules</p>
          <ul className="list-disc  space-y-2">
            <li className="flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span>Check-in after {place.checkIn} pm</span>
            </li>

            <li className="flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span>Checkout before {place.checkOut} am</span>
            </li>

            <li className="flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "24px",
                    width: "24px",
                    fill: "currentColor",
                  }}
                >
                  <path d="m3.7 2.3 26 26-1.4 1.4-26-26zM14.77 19l2 2H3v4h17.76l2 2H3a2 2 0 0 1-2-1.85V21a2 2 0 0 1 1.85-2H3zM30 19v6.76l-2-2V19zm-4 0v2.76L23.24 19zM21 3a4 4 0 0 1 3.36 6.18l-.1.14.13.04a8 8 0 0 1 5.6 7.4L30 17h-2a6 6 0 0 0-5.78-6H21V9a2 2 0 0 0 .15-4H21zm1 10a4 4 0 0 1 4 3.8v.2h-2a2 2 0 0 0-1.85-2H19.24l-2-2zM17 3v2a4 4 0 0 0-4 3.76l-1.68-1.69A6 6 0 0 1 16.78 3z"></path>
                </svg>
              </span>
              <span>No smoking</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-semibold mb-4">Safety & Property</p>
          <ul className="list-disc  space-y-2">
            <li className="flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "24px",
                    width: "24px",
                    fill: "currentColor",
                  }}
                >
                  <path d="M2.05 6.3 4 8.23V25a3 3 0 0 0 2.82 3h16.94l1.95 1.95c-.16.02-.33.04-.5.04L25 30H7a5 5 0 0 1-5-4.78V7c0-.24.02-.48.05-.7zm1.66-4 26 26-1.42 1.4-26-26 1.42-1.4zM25 2a5 5 0 0 1 5 4.78V25a5 5 0 0 1-.05.7L28 23.77V7a3 3 0 0 0-2.82-3H8.24L6.3 2.05c.16-.02.33-.04.5-.04L7 2h18zM11.1 17a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17h2.03zm5.9 4.24 1.35 1.36a6.95 6.95 0 0 1-1.35.33v-1.69zM21.24 17h1.69c-.07.47-.18.92-.34 1.35L21.24 17zM17 9.07A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9V9.07zm-7.6 4.58L10.76 15H9.07c.07-.47.18-.92.33-1.35zM15 9.07v1.69L13.65 9.4A6.95 6.95 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
              </span>
              <span>No carbon monoxide alarm</span>
            </li>

            <li className="flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "24px",
                    width: "24px",
                    fill: "currentColor",
                  }}
                >
                  <path d="m3.49 7.73 1.44 1.44A12.94 12.94 0 0 0 3 16a13 13 0 0 0 19.82 11.07l1.45 1.44A14.93 14.93 0 0 1 16 31 15 15 0 0 1 3.49 7.73zm.22-5.44 26 26-1.42 1.42-26-26 1.42-1.42zM16 1a15 15 0 0 1 12.52 23.27l-1.45-1.45A12.94 12.94 0 0 0 29 16 13 13 0 0 0 16 3a12.94 12.94 0 0 0-6.83 1.93L7.74 3.5A14.93 14.93 0 0 1 16 1zm-4.9 16a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17h2.03zm5.9 4.24 1.35 1.36a6.95 6.95 0 0 1-1.35.33v-1.69zM21.24 17h1.69c-.07.47-.18.92-.34 1.35L21.24 17zM17 9.07A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9V9.07zm-7.6 4.58L10.76 15H9.07c.07-.47.18-.92.33-1.35zM15 9.07v1.69L13.65 9.4A6.95 6.95 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
              </span>
              <span>No smoke alarm</span>
            </li>

            <li className="flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "24px",
                    width: "24px",
                    fill: "currentColor",
                  }}
                >
                  <path d="M23 3a2 2 0 0 1 2 1.85v1.67l5-2v11.96l-5-2V16a2 2 0 0 1-1.85 2H16.9a5 5 0 0 1-3.98 3.92A5 5 0 0 1 8.22 26H4v4H2V20h2v4h4a3 3 0 0 0 2.87-2.13A5 5 0 0 1 7.1 18H4a2 2 0 0 1-2-1.85V5a2 2 0 0 1 1.85-2H4zM12 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm11-9H4v11h3.1a5 5 0 0 1 9.8 0H23zm5 2.48-3 1.2v3.64l3 1.2zM7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
              </span>
              <span>Exterior security cameras on property</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold mb-4">Cancellation Policy</p>
          <div>
            Cancel at least 2 days before your reservation for a partial refund.
            After that, the reservation is non-refundable.
            <div className="pt-5">
              Review this Host&apos;s full policy for details.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseRules;
