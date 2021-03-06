import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    lessonType: 'class' | 'live';
    availableAt: Date;
    title: string;
    slug: string;
  }[]

}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div>
        <div className="lesson-scrollbar flex flex-col gap-8 pl-2 max-h-[73vh] overflow overflow-y-auto">
          {data?.lessons.map(lesson => (
            <Lesson key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}