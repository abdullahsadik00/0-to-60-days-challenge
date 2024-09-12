import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
  const res = await prisma.user.create({
    data: {
        email:username,
        password,
        firstname,
        lastname
    },
    select:{
        id:true,

    }
  })
  console.log(res);
}

// insertUser("admin3", "123456", "sadik", "shaikh")
// insertUser("admin4", "123456", "sadik", "shaikh")
// insertUser("admin6", "123456", "sadik", "shaikh")
// insertUser("admin7", "123456", "sadik", "shaikh")

interface UpdateParams{
    firstname:string,
    lastname:string
}

async function updateUser(username:string,{firstname,lastname}:UpdateParams) {
   const res = await prisma.user.update({
    where:{email:username},
    data:{
        firstname,lastname
    }
   })
   console.log(res)
}

// updateUser("admin1", {
//     firstname: "Abdullah",
//     lastname: "Sadik"
// })

async function deleteUser(username:string) {
    const res = await prisma.user.delete({
     where:{email:username}
    })
    console.log(res)
 }
 
 deleteUser("admin3")