
type Article = {
    author: string | null;
    catogory: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
};

type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
};

type NewsResponse = {
    pagination: Pagination;
    data: Article[];
};


type catogory =
    | "General"
    | "business"
    | "entertainment"
    | "health"
    | "science"
    | "sports"
    | "technology";
