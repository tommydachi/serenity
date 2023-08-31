
export const ShowIntroButtons = ({ setShowIntro }: { setShowIntro: (showIntro: boolean) => void} ) => {
  return (
    <div>
      <p>Quick question, have you ever read any comic book?</p>

      <button onClick={() => setShowIntro(true)}>Yes, I love them!</button>
      <button onClick={() => setShowIntro(false)}>No, cut to the chase</button>
    </div>
  )
}