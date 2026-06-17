import test from '@playwright/test'
import dotenv from 'dotenv'


const envValue=process.env.EnvFile
//set the value from env
dotenv.config({path:`/tests/Testdata/QA.env`})


test("Using envfile",async({page})=>{


    let URL=process.env.url as string
   let user=process.env.LT_username as string
   let pass=process.env.LT_password as string


await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill(user)
await page.locator("#password").fill(pass)
await page.locator(".decorativeSubmit").click()



})



function parse(): any {
    throw new Error('Function not implemented.')
}