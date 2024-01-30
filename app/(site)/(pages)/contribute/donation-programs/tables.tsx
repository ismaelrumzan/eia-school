import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export function TableMain(): JSX.Element {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell colSpan={4} className="text-center">
            My Giving Potential
          </TableHeadCell>
        </TableHead>
        <TableHead>
          <TableHeadCell>Total Pledge Amount</TableHeadCell>
          <TableHeadCell>Over 12 mos</TableHeadCell>
          <TableHeadCell>Over 24 mos</TableHeadCell>
          <TableHeadCell>Over 36 mos</TableHeadCell>
          <TableHeadCell>Over 48 mos</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="text-center">
            <TableCell>$200,000</TableCell>
            <TableCell>$16,667</TableCell>
            <TableCell>$8,333</TableCell>
            <TableCell>$5,556</TableCell>
            <TableCell>$4,167</TableCell>
          </TableRow>
          <TableRow className="text-center">
            <TableCell>$100,000</TableCell>
            <TableCell>$8,333</TableCell>
            <TableCell>$4,167</TableCell>
            <TableCell>$2,778</TableCell>
            <TableCell>$2,083</TableCell>
          </TableRow>
          <TableRow className="text-center">
            <TableCell>$50,000</TableCell>
            <TableCell>$4,167</TableCell>
            <TableCell>$2,083</TableCell>
            <TableCell>$1,389</TableCell>
            <TableCell>$1,042</TableCell>
          </TableRow>
          <TableRow className="text-center">
            <TableCell>$25,000</TableCell>
            <TableCell>$2,083</TableCell>
            <TableCell>$1,042</TableCell>
            <TableCell>$694</TableCell>
            <TableCell>$521</TableCell>
          </TableRow>
          <TableRow className="text-center">
            <TableCell>$10,000</TableCell>
            <TableCell>$833</TableCell>
            <TableCell>$417</TableCell>
            <TableCell>$278</TableCell>
            <TableCell>$208</TableCell>
          </TableRow>
          <TableRow className="text-center">
            <TableCell>$5,000</TableCell>
            <TableCell>$417</TableCell>
            <TableCell>$208</TableCell>
            <TableCell>$139</TableCell>
            <TableCell>$104</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export function Table1(): JSX.Element {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell colSpan={3} className="text-center">
            From
          </TableHeadCell>
          <TableHeadCell colSpan={3} className="text-center">
            To
          </TableHeadCell>
        </TableHead>
        <TableHead className="border-t border-gray-200 text-center">
          <TableHeadCell>Total Pledge</TableHeadCell>
          <TableHeadCell>Monthly Amount</TableHeadCell>
          <TableHeadCell>Months</TableHeadCell>
          <TableHeadCell>Monthly Amount</TableHeadCell>
          <TableHeadCell>Months</TableHeadCell>
          <TableHeadCell>New total pledge</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="text-center">
            <TableCell>$100,000</TableCell>
            <TableCell>$4,167</TableCell>
            <TableCell>24</TableCell>
            <TableCell>$4,167</TableCell>
            <TableCell>$48</TableCell>
            <TableCell>$200,000</TableCell>
          </TableRow>
          <TableRow className="text-end">
            <TableCell colSpan={5}></TableCell>
            <TableCell className="text-center text-[12px] uppercase font-semibold text-white bg-[#C6BB79]">
              Double your impact
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export function Table2(): JSX.Element {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell colSpan={3} className="text-center">
            From
          </TableHeadCell>
          <TableHeadCell colSpan={3} className="text-center">
            To
          </TableHeadCell>
        </TableHead>
        <TableHead className="border-t border-gray-200 text-center">
          <TableHeadCell>Total Pledge</TableHeadCell>
          <TableHeadCell>Monthly Amount</TableHeadCell>
          <TableHeadCell>Months</TableHeadCell>
          <TableHeadCell>Monthly Amount</TableHeadCell>
          <TableHeadCell>Months</TableHeadCell>
          <TableHeadCell>New total pledge</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="text-center">
            <TableCell>$50,000</TableCell>
            <TableCell>$4,167</TableCell>
            <TableCell>12</TableCell>
            <TableCell>$4,167</TableCell>
            <TableCell>$48</TableCell>
            <TableCell>$200,000</TableCell>
          </TableRow>
          <TableRow className="text-end">
            <TableCell colSpan={5}></TableCell>
            <TableCell className="text-center text-[12px] uppercase font-semibold text-white bg-[#C6BB79]">
              4X Your Influence
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export function Table3(): JSX.Element {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell colSpan={3} className="text-center">
            From
          </TableHeadCell>
          <TableHeadCell colSpan={3} className="text-center">
            To
          </TableHeadCell>
        </TableHead>
        <TableHead className="border-t border-gray-200 text-center">
          <TableHeadCell>Total Pledge</TableHeadCell>
          <TableHeadCell>Monthly Amount</TableHeadCell>
          <TableHeadCell>Months</TableHeadCell>
          <TableHeadCell>Monthly Amount</TableHeadCell>
          <TableHeadCell>Months</TableHeadCell>
          <TableHeadCell>New total pledge</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="text-center">
            <TableCell>$5,000</TableCell>
            <TableCell>$104</TableCell>
            <TableCell>48</TableCell>
            <TableCell>$208</TableCell>
            <TableCell>$48</TableCell>
            <TableCell>$10,000</TableCell>
          </TableRow>
          <TableRow className="text-end">
            <TableCell colSpan={5}></TableCell>
            <TableCell className="text-center text-[12px] uppercase font-semibold text-white bg-[#C6BB79]">
              2X Your Legacy
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
