const grpc = require('@grpc/grpc-js');
const PROTO_PATH = "./proto/user.proto";
var protoLoader = require('@grpc/proto-loader');
const mongoose = require('mongoose');


const userServiceImpl = require('./services/userServiceImpl');


require('dotenv').config();


const mongooseURL = process.env.MONGO_URI;

mongoose.connect(mongooseURL)
.then(() => {
    console.log('Connected to MongoDB');
}) 
.catch(err => {
    console.log(err);
})

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const usersProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
const userServiceLoc = usersProto.users.UserService.service;

server.addService(userServiceLoc,userServiceImpl);
server.use(function(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
});

server.bindAsync(
    '0.0.0.0:9090',
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
        if (error) throw error;
        console.log("Server running at 0.0.0.0.9090");
        server.start();
    }
)