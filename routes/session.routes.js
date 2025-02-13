import { Router } from "express";
import passport from "passport";

import {login,register,gitHubLogin} from '../controllers/sessionManager.js'


const sessionRouter=Router()

sessionRouter.post('/login',passport.authenticate('login'),login)
sessionRouter.post('/register',passport.authenticate('register'),register)
sessionRouter.post('/github',passport.authenticate('github',{scope:['user:email']}),async(req,res)=>{})
sessionRouter.post('/githubcallback',passport.authenticate('github',{failureRedirect:'/login'}),gitHubLogin)
sessionRouter.get('/current', passport.authenticate('jwt'), async (req,res) => console.log("Hola"))

export default sessionRouter