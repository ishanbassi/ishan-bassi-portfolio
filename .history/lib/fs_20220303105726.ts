import {promises as fsPromises } from 'fs'
import path from 'path';
export async function readMD(fileName:string) {
    const filePath = path.join(process.cwd()  , 'markdown' ,fileName)
    console.log(filePath)
    let markdown; 
      try{
        markdown = await fsPromises.readFile(filePath , 'utf8')
      }catch(err) {
        markdown = ''
      }
      return markdown
}