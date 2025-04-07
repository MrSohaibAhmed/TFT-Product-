import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { columns } from './components/users-columns-student'
import { UsersDialogsStudent } from './components/users-dialogs-student'
import { UsersPrimaryButtonsStudent } from './components/users-primary-buttons-student'
import { UsersTableStudent } from './components/users-table-student'
import UsersProvider from './context/users-context'
import { userListSchema } from './data/schema'
import { users } from './data/users'

export default function Users() {
  // Parse user list
  const userList = userListSchema.parse(users)

  return (
    <UsersProvider>
      <Header fixed>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Student List</h2>
            <p className='text-muted-foreground'>
              Manage your students and their roles here.
            </p>
          </div>
          <UsersPrimaryButtonsStudent />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <UsersTableStudent data={userList} columns={columns} />
        </div>
      </Main>

      <UsersDialogsStudent />
    </UsersProvider>
  )
}
