export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  const ButtonContainer = buttonsContainer;

  return (
    <>
      {/* <menu>{buttons}</menu> */}
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
