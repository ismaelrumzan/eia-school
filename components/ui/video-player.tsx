'use client';
import ReactPlayer from 'react-player/lazy'

export function VideoPlayer({
    url
}: {
    url: string
}): JSX.Element {
    return (
        <ReactPlayer controls url={url} volume={0} muted playing config={{
            youtube: {
                playerVars: { cc_load_policy: 1, cc_lang_pref: 'en' }
            }
        }} />)
}