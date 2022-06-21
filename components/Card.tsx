const Card = ({children}: any) => {
  return (
    <div className="bg-slate-100 shadow-lg rounded-lg p-5 lg:p-8 mb-8">
      {children}
    </div>
  );
};

export default Card;