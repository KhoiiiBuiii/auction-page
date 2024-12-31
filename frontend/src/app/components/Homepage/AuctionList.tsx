interface AuctionItem {
    id: number;
    name: string;
    image: string;
    bids: number;
    seller: string;
    timeLeft: string;
  }
  
  const auctions: AuctionItem[] = [
    { id: 1, name: 'Camera', image: '/images/camera.jpg', bids: 5, seller: 'Seller 1', timeLeft: '23h 59m' },
    { id: 2, name: 'Gramophone', image: '/images/gramophone.jpg', bids: 3, seller: 'Seller 2', timeLeft: '20h 15m' },
    { id: 3, name: 'Sunglasses', image: '/images/sunglasses.jpg', bids: 8, seller: 'Seller 3', timeLeft: '10h 5m' },
  ];
  
  const AuctionList = () => {
    return (
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Ongoing Auctions</h2>
        <div className="grid grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <div key={auction.id} className="border rounded-lg shadow-md p-4">
              <img src={auction.image} alt={auction.name} className="w-full h-40 object-cover rounded" />
              <h3 className="font-bold mt-4">{auction.name}</h3>
              <p>{auction.bids} Bids</p>
              <p>Seller: {auction.seller}</p>
              <p>Time Left: {auction.timeLeft}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default AuctionList;