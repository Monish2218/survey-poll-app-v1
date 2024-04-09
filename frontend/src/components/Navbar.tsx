import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"



function Navbar() {
  return (
    <nav className="flex flex-row justify-between mt-2 sticky top-2">
      
      <span className={navigationMenuTriggerStyle()}><Link to="/">SurveySphere</Link></span>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Create</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}><Link to="/create-poll">Create Poll</Link></NavigationMenuLink>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}><Link to="/create-survey">Create Survey</Link></NavigationMenuLink>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}><Link to="/create-quiz">Create Quiz</Link></NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}><Link to="/features">Features</Link></NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}><Link to="/demo">Demo</Link></NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div>
        <span className={cn(navigationMenuTriggerStyle(), buttonVariants({ variant: "outline" }))}><Link to="/login">Login</Link></span>
        <span className={cn(navigationMenuTriggerStyle(), buttonVariants({ variant: "destructive" }), "bg-blue-600 hover:bg-blue-800 hover:text-white mx-3")}><Link to="/register">Register</Link></span>
      </div>

    </nav>
  )
}

export default Navbar