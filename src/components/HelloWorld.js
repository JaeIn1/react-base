import Style from "./HelloWorld.module.css";

const HelloWorld = () => {
  return (
    //중괄호를 두번하면 객체를 생성하는것 css파일의 key , value값으로 저장
    <div className={Style.HelloWorld}>
      <h1>Hello, World</h1>
      <p>This is my React Application</p>
    </div>
  );
};

export default HelloWorld;
