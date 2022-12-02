import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from "../components/sectionTitle";
import fs from 'fs';
import matter from 'gray-matter';

export default function Blog({ posts }) {
    return (
        <>
            {/* posts */}
            <SectionTitle
                pretitle="پست‌ها"
                title="مطالبی که میتونه کمکت کنه">
                اینجا پر از مطالبیه که میتونن بهت کمک کنن سریعتر 
                با میدان سایبری کار کنی.
            </SectionTitle>            
            <section>
                <div className='mx-auto container p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {posts.map(({ slug, frontmatter }) => (
                        <div key={slug} className='cursor-pointer border border-gray-200 m-2 rounded-xl p-4 shadow-lg overflow-hidden flex flex-col'>
                            <Link href={`/post/${slug}`}>
                                <div>
                                    <Image className='bg-gray-50' width={450} height={320} alt={frontmatter.title} src={`/${frontmatter.socialImage}`} />
                                    <hr className='mt-2' />
                                    <p className='text-lg p-2 truncate'>{frontmatter.title}</p>
                                    <p className='text-sm px-2 text-gray-400'>{frontmatter.date}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const files = fs.readdirSync('posts');
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {
            slug,
            frontmatter,
        };
    });

    return {
        props: {
            posts,
        },
    };
}