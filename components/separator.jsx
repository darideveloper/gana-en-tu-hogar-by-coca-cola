export default function Separator ({}) {
  return (
    <>
      <div
        className={`
          separator-h
          block lg:hidden
          w-10/12 lg:w-3
          h-3 lg:h-56 xl:h-72
          gradiant lg:gradiant-vertical
          mx-auto
        `}
      />

      <div
        className={`
          separator-v
          hidden lg:block
          w-2
          h-56 xl:h-72
          gradiant-vertical
          mx-auto
        `}
      />
    </>
  )
}