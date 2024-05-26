import { Routes } from "@angular/router"

export const routes: Routes = [
	{
		path: "login",
		loadComponent: () =>
			import("./modules/auth").then((co) => co.AuthComponent),
		children: [
			{
				path: "",
				title: "Login",
				loadComponent: () =>
					import("./modules/auth/pages/login").then((co) => co.LoginComponent)
			},
			{
				path: "register",
				title: "Register",
				loadComponent: () =>
					import("./modules/auth/pages/register").then(
						(co) => co.RegisterComponent
					)
			}
		]
	},
	{
		path: "dashboard",
		title: "Dashboard",
		loadComponent: () =>
			import("./modules/dashboard").then((co) => co.DashboardComponent)
	},
	{
		path: "",
		redirectTo: "/login",
		pathMatch: "full"
	}
]
