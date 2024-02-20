type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount } = props;
  return (
    <div>
      <h2>
        {" "}
        {props.isLoggedIn
          ? `Welcome to ${props.name}. You have ${messageCount} messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
