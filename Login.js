const LoginData = require("./LoginData");

function Login(email, password) {
  const FindData = LoginData.find((data) => data.email === email);
  if (FindData) {
    if (FindData.password === password) {
      console.log("Login Success");
    } else {
      console.log("Incorrect Password");
    }
  } else {
    console.log("User Not Found");
  }
}
Login("chauhanashish8433@gmail.com", "Ashish123");
function ForgetPassword(email,newPassword){
const findData=LoginData.find((data)=>data.email===email);
if(findData){
   if(findData.email===email){
findData.password=newPassword;
console.log("Password Changed")
console.log(findData);
   }
}else{
  console.log("Invalid Email! Please Enter Valid Email")
}
}
ForgetPassword("chauhanashish8433@gmail.com","Ashish1234");





