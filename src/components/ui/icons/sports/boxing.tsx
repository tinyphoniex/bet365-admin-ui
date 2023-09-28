import * as React from "react"
import { SVGProps } from "react"

export const BoxingIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15}
        viewBox="0 0 15 15"
        {...props}>
        <g fill="#DF0411" fillRule="evenodd">
            <path d="M11.6 8.675c0 .95.09 2.872.398 3.879-.093.369-.662.514-.928.592-.707-2.755-.987-4.814-.838-6.176.086-.741.616-1.155 1.588-1.243-.061.983-.195 2.002-.22 2.948zm-5.115 2.47c1.315-.055 2.424-.501 3.635-.967.141.807.51 2.29.738 3.034-.146.37-3.044 1.047-3.447.684-.486-.657-.831-1.958-.926-2.751z" />
            <path d="M6.236 8.99c-.02-1.006-.116-1.888-.65-2.662-.024.351-.241.677-.425.743.086-.48.333-.9.088-1.507-.106.188-.227.344-.443.307.12-.453.55-.66-.428-1.974-.482-.624-1.588.41-1.34 1.555-.006 1.61 1.091 2.986 2.895 4.213.17.253.125.647.36.937.243-.006.502.03.697-.099-.226-.347-.277-.56-.13-1.087.09.363.006.697.322 1.018.335.044 2.531-.48 2.828-.769-.34-3.487-.375-3.83 1.81-4.213a10.22 10.22 0 0 0-.02-.834c-.213-1.722-.396-3.482-1.79-3.598-2.323-.117-4.159.277-5.382 1.313-.617.61.182 2.049.719 2.414 1.056.959 5.873.258 4.985-2.614.117.056.284.72.245 1.068-.084.537-.205 1.735-2.205 2.361-.635.182-1.856.278-2.551 0 .843 1.271.98 2.558.415 3.429z" />
        </g>
    </svg>
)
export default BoxingIcon
