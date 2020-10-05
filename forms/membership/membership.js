
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]



Button1.onclick=function(){
  if Input1.value in member:
    Label1.value = ("You are a member.")
  else:
    Label1.value = ("You are not a member yet. We will add you to the list.")
    members.push(Input1.value)
}

