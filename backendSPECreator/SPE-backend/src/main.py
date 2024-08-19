from fastapi import FastAPI
from fastapi_users import FastAPIUsers

from authorization.base_config import auth_backend
from authorization.manager import get_user_manager
from authorization.models import User
from authorization.schemas import UserRead, UserCreate

app = FastAPI(
    title="SPE-BACKEND"
)

fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth/jwt",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)
