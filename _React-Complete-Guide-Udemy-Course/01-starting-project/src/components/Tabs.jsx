export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonContainer = buttonsContainer || "menu";

  return (
    <>
      {/* <menu>{buttons}</menu> */}
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
