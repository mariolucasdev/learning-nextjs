import { BlogPost } from "../../@types/BlogPostInterface"

export default function useIndex() {
    const posts: BlogPost[] = [
        {
            id: '1',
            title:
                'Como conseguir sua primeira oportunidade de desenvolvedor(a) júnior',
            slug:
                'como-conseguir-sua-primeira-oportunidade-de-desenvolvedora-junior',
            description:
                'Neste artigo, separamos algumas dicas para te ajudar a se destacar no mercado, nessa caminhada até a tão sonhada primeira vaga.',
            picture:
                'https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/05/como-conseguir-sua-primeira-oportunidade-de-desenvolvedor-a-junior.png',
        },
        {
            id: '2',
            title:
                'Como conseguir sua primeira oportunidade de desenvolvedor(a) júnior',
            slug:
                'como-conseguir-sua-primeira-oportunidade-de-desenvolvedora-junior',
            description:
                'Neste artigo, separamos algumas dicas para te ajudar a se destacar no mercado, nessa caminhada até a tão sonhada primeira vaga.',
            picture:
                'https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/05/como-conseguir-sua-primeira-oportunidade-de-desenvolvedor-a-junior.png',
        },
    ];

    return {
        posts,
    }
}