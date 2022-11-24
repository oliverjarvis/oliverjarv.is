
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import path from 'path'
import fsPromises from 'fs/promises';

export async function getStaticProps({ params }) {
    const fs = require('fs');

    const filePath = path.join(process.cwd(), "/public/blogposts/" + params.id + ".mdx");
    const jsonData = await fsPromises.readFile(filePath);

    return {
        props: {
            id: await serialize(jsonData)
        },
      }
}

export async function getStaticPaths(){
    const testFolder = './blogposts/';
    const fs = require('fs');
    let files = []
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
           files.push({params: {id: file.replace(".mdx", "")}})
        });
      });

    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: "blocking", // can also be true or 'blocking'
    }
}

export default function BlogPost({id}){
    console.log(id);
    return (
        <MDXRemote {...id} />
    )
}