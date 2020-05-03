const fs = require('fs').promises;
const path = require('path');


async function readDir(rootDir = path.resolve(__dirname)) {
  const files = await fs.readdir(rootDir)
  await walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (const file of files) {
    const fileFullPath = path.resolve(rootDir,file)
    const stats = await fs.stat(fileFullPath);
    if (stats.isDirectory()) {
      if (/\.git/g.test(fileFullPath)) continue
      readDir(fileFullPath);
      continue;
    }
    console.log('file :>> ', file, '|| isDirectory :>> ', stats.isDirectory());
  }
}
readDir('C:\\Users\\Alan\\Google Drive\\Cursos e Projetos Web\\Curso_Javascript_Udemy').catch(error => console.log('error :>> ', error))