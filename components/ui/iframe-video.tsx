export function VideoPlayer({
    url
}: {
    url: string
}): JSX.Element {
    return (
        <iframe
        src={url}
        frameBorder="0" height="100%" width="100%"
        allowFullScreen
      />    
    )
}