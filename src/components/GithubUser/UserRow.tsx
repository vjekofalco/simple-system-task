import React from 'react'
import cx from 'clsx'

import { ArrowDown } from '../icons/ArrowDown'

type Props = {
  userName: string
  handleClick: () => void
  isOpen: boolean
}

export const UserRow = ({ userName, handleClick, isOpen }: Props) => (
  <div
    className="bg-greyDark p-s font-bold flex justify-between items-center cursor-pointer"
    onClick={handleClick}
  >
    <div>{userName}</div>
    <div className={cx('w-m h-m ease-in duration-100', isOpen && 'rotate-180')}>
      <ArrowDown />
    </div>
  </div>
)
