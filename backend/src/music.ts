export async function handle(): Promise<Response> {
  const song = {
    title: "Example Song",
    artist: "Example Artist",
    nowPlaying: true,
    source: "Example",
  };

  return Response.json(song, { status: 200 });
}
