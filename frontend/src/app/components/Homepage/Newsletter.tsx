const Newsletter = () => {
    return (
      <section className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-8">
        <h2 className="text-center text-2xl font-bold">Stay Up-to-Date About Our Latest Auctions</h2>
        <div className="flex justify-center mt-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 rounded-l-md"
          />
          <button className="bg-blue-700 px-6 py-3 rounded-r-md">Subscribe</button>
        </div>
      </section>
    );
  };
  
  export default Newsletter;