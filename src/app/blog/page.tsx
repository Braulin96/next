import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "Blog", //this way it will ignore the template propriety in layout and instead of being blog | Code Evolution would be only Blog.
    }
}
export default function Blog () {
    return <h1>My Blog</h1>
}