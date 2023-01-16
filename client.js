//this is a testing module. Not a part of actual API.

const grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = "./proto/user.proto";

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const UsersService = grpc.loadPackageDefinition(packageDefinition).users.UserService;

const client = new UsersService(
    "192.168.81.62:9090",
    grpc.credentials.createInsecure()
);


client.getAllUsers({}, (error, users) => {
    if (error) throw error
    console.log("running");
    console.log(users);
})

const user = {
    firstName: 'Abc',
    lastName: 'Def',
    email: 'abcd@gmail.com',
    designation: 'Engineering Lead',
    logins: '11',
    profilePicture: ''
}

const updateUser = {
    firstName: 'Pqr',
    lastName: 'SRT',
    email: 'pqrs@gmail.com',
    designation: 'SDE-2',
    logins: '12',
    profilePicture: ''
}

client.getUserByEmail({ email: 'ghoshsoumyadeep330@gmail.com' }, (error, user) => {
    try {
        console.log(user);
    } catch (error) {
        console.log(error);
    }
})

// client.createUser({user},(error,user) => {
//     console.log('creating user');
//     //error code 2 is for E11000 i.e duplicate key
//     if(error && error.code === 2){
//         console.log('User already exists');
//     }
//     else{
//         console.log('Successfully created user');
//         console.log(user.user);
//     }
// });

// client.editUserByEmail({ email: updateUser.email, user: updateUser }, (error, user) => {
//     try {
//         if (error) console.log(error);
//         else console.log("Successfully Updated user =>", user);
//     } catch (error) {
//         console.log(error);
//     }
// })

// client.deleteUserByEmail({email:updateUser.email},(error,user) => {
//     try {
//         if(error) console.log(error);
//         else console.log("Successfully deleted user =>",user);
//     } catch (error) {
//         console.log(error);
//     }
// })