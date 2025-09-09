    import mongoose,{Schema} from "mongoose";
     import bcrypt from "bcrypt";
     import jwt from "jsonwebtoken"


    const userSchema = new Schema({
          username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
          },
          email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
          },
           fullname:{
            type: String,
            required: true,
            index: true,
            trim: true,
          },
          avatar:{
            type: String,
            required: true
          },
          avatar:{
            type: String,
            required: true
          },
          coverImage:{
            type: String
          },
          watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
          ],
          Password: {
            type: String,
            required: [true, 'Password is required']
          },
          refreshToken:{
            type: String
          }

    }, {timestamps: true})


    userSchema.pre("save", async function (next){
        if(!this.isModified("Password")) return next();

        this.Password = bcrypt.hash(this.Password, 10)
        next();
    })

    userSchema.methods.isPasswordCorrect = async function(Password){
        return await bcrypt.compare(Password, this.Password)
    }

    userSchema.methods.genearteAccessToken = function(){
       return jwt.sign(
            {
                _id: this._id,
                email: this.email,
                username: this.username,
                fullname: this.fullname
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY   
            }
        )
    }
    userSchema.methods.genearteRefreshToken = function(){
        return jwt.sign(
            {
                _id: this._id,
                 
            },
            process.env.REPRESH_TOKEN_SECRET,
            {
            expiresIn: process.env.REPRESH_TOKEN_EXPIRY   
            }
        )
    }




    export const User = mongoose.model("User",userSchema)