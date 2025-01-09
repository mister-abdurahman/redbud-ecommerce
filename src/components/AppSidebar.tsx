import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getCategorys } from "@/services/apiProducts";
import { Item } from "@radix-ui/react-select";
import Link from "next/link";

export async function AppSidebar() {
  const categories = await getCategorys();

  return (
    <Sidebar>
      <SidebarContent title="list of product categories">
        <SidebarGroup>
          <SidebarGroupLabel className="underline">
            CATEGORIES
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.id}>
                  <SidebarMenuButton asChild>
                    <Link href={`/products?search=${category.name}`}>
                      <span>{category.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
