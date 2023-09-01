type Props = {
  cityHover: string,
  setCityHover: (city: string) => void;
}

export const AboutMe = ({ cityHover, setCityHover }: Props) => {
  return (
    <>
      <p>
        Sorry for the start, I was inspired by the latest Spider-Man movie and I
        really wanted to do that.
      </p>
      <p>
        Hi! My name is Tommy and I am a current student at UNSW studying
        Computer Science alongside the Co-op scholarship! I am in my penultimate
        year and will graduate at the end of 2024. Fun fact, did you know that
        in 2024,{" "}
        {cityHover === "Rome" ? (
          <span onMouseEnter={() => setCityHover("Paris")}>Rome</span>
        ) : (
          <span onMouseLeave={() => setCityHover("Rome")}>Paris</span>
        )}{" "}
        will be hosting the Olympics?
      </p>
    </>
  );
};
