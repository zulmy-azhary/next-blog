const Card = ({children}: any) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 lg:p-8 pb-12 mb-8">
      {children}
    </div>
  );
};

export default Card;