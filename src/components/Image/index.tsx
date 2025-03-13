type ImageProps = {
    name: string,
    image: string
}

export const Image = ({ name, image}: ImageProps) => {
    return <img alt={name} src={image} />
}