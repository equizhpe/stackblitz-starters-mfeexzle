export default function Page() {  
  return (
    <>
      <div style={{ backgroundColor: '#D3D3D3', padding: '20px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Adjusted title position */}
        <h1 className="text-3xl text-center text-black mb-16">Final Exam: New Orleans Saints Ticket Box</h1> {/* Increased margin-bottom to push it down */}
        
        {/* Wider form with increased background width */}
        <form className="w-full mx-auto mt-10 bg-blue-50 p-8 rounded-lg shadow-lg flex-grow max-w-6xl"> {/* Changed to max-w-6xl to make it wider */}
          
          {/* First Name */}
          <label htmlFor="firstName" className="block text-lg text-black mb-4">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter your first name"
          />
          
          {/* Last Name */}
          <label htmlFor="lastName" className="block text-lg text-black mb-4">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter your last name"
          />
          
          {/* Email */}
          <label htmlFor="email" className="block text-lg text-black mb-4">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter your email"
          />
          
          {/* Phone Number */}
          <label htmlFor="phone" className="block text-lg text-black mb-4">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter your phone number"
          />
          
          {/* Game Selection */}
          <label htmlFor="game" className="block text-lg text-black mb-4">Choose a Game:</label>
          <select
            name="game"
            id="game"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          >
            <option value="New Orleans Saints vs. Green Bay Packers">New Orleans Saints vs. Green Bay Packers</option>
            <option value="New Orleans Saints vs. Las Vegas Raiders">New Orleans Saints vs. Las Vegas Raiders</option>
            <option value="New Orleans Saints vs. Tampa Bay Buccaneers">New Orleans Saints vs. Tampa Bay Buccaneers</option>
            <option value="New Orleans Saints vs. Dallas Cowboys">New Orleans Saints vs. Dallas Cowboys</option>
          </select>

          {/* Ticket Quantity (Radio Buttons) */}
          <div className="mb-6">
            <p className="text-lg text-black mb-4">How many tickets do you need?</p>
            <label htmlFor="oneTicket" className="inline-block mr-6">
              <input type="radio" id="oneTicket" name="ticketQuantity" value="1" />
              1 Ticket
            </label>
            <label htmlFor="twoTickets" className="inline-block mr-6">
              <input type="radio" id="twoTickets" name="ticketQuantity" value="2" />
              2 Tickets
            </label>
            <label htmlFor="threeTickets" className="inline-block mr-6">
              <input type="radio" id="threeTickets" name="ticketQuantity" value="3" />
              3 Tickets
            </label>
            <label htmlFor="fourTickets" className="inline-block mr-6">
              <input type="radio" id="fourTickets" name="ticketQuantity" value="4" />
              4 Tickets
            </label>
            <label htmlFor="fourPlusTickets" className="inline-block">
              <input type="radio" id="fourPlusTickets" name="ticketQuantity" value="4+" />
              4+ Tickets
            </label>
          </div>

          {/* Which Parking Pass? (Checkbox) */}
          <p className="text-lg text-black mb-4">Which Parking Pass?</p>
          <div className="mb-6">
            <label htmlFor="premiumParking" className="inline-block mr-6">
              <input type="checkbox" id="premiumParking" name="parkingPass" value="Premium" />
              Premium Parking Pass
            </label>
            <label htmlFor="standardParking" className="inline-block mr-6">
              <input type="checkbox" id="standardParking" name="parkingPass" value="Standard" />
              Standard Parking Pass
            </label>
            <label htmlFor="noParking" className="inline-block">
              <input type="checkbox" id="noParking" name="parkingPass" value="No" />
              No Parking Pass
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
