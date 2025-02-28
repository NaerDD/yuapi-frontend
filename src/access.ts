/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: InitialState | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canUser:loginUser,
    //检查权限
    canAdmin: loginUser?.userRole === 'admin',
  };
}
