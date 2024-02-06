/* eslint-disable react/prop-types */
const Card = (props) => {

  console.log(props);

  return (
    <>
      <div className="relative h-[200px] w-[200px] rounded-md mb-5">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{props.title}</h1>
          <p className="mt-2 text-sm text-gray-300">{props.bio}</p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {props.btnText || `EmptyMe`}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
