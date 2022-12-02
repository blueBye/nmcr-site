import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export async function getStaticPaths() {
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default function PostPage({ frontmatter, content }) {
    return (
        <div className='container p-8 mx-auto'>
            <div className='flex items-center'>
                <img className='w-20 h-20 mx-4 bg-gray-50' src={`/${frontmatter.socialImage}`} alt={'frontmatter.socialImage'}></img>
                <div className='text-sm'>
                    <p className='mb-2'>عنوان: {frontmatter.title}</p>
                    <p className='text-gray-600'>تاریخ: {frontmatter.date}</p>
                </div>
            </div>
            <hr className='my-4'/>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
    );
}
