import { TableHeader } from './mapArrayToElements'
import { TableHeader as TableHeaderLodash } from './mapArrayToElementsWithLodash'

export default {
    title: 'Examples/Map Array to Elements',
}

export const TableHeaderStatic = () => <table><thead><TableHeader /></thead></table>

export const TableHeaderStaticLodash = () => <table><thead><TableHeaderLodash /></thead></table>
