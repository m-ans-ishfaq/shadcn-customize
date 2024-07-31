"use client";

import { ToggleDarkThemeButton } from "@/components/custom/toggle-dark-theme-button";
import { AccordionDemo } from "./demo/accordion";
import { AlertDemo } from "./demo/alert";
import { AlertDialogDemo } from "./demo/alert-dialog";
import { AspectRatioDemo } from "./demo/aspect-ratio";
import { AvatarDemo } from "./demo/avatar";
import { BadgeDemo } from "./demo/badge";
import { BreadcrumbDemo } from "./demo/bread-crumb";
import { ButtonDemo } from "./demo/button";
import { CalendarDemo } from "./demo/calendar";
import { CardWithForm } from "./demo/card";
import { CarouselDemo } from "./demo/carousel";
import { ChartDemo } from "./demo/chart";
import { CheckboxDemo } from "./demo/checkbox";
import { CollapsibleDemo } from "./demo/collapsible";
import { ComboboxDemo } from "./demo/combobox";
import { CommandDemo } from "./demo/command";
import { ContextMenuDemo } from "./demo/context-menu";
import { DatePickerDemo } from "./demo/date-picker";
import { DialogDemo } from "./demo/dialog";
import { DrawerDemo } from "./demo/drawer";
import { DropdownMenuDemo } from "./demo/dropdown-menu";
import { InputForm } from "./demo/form";
import { HoverCardDemo } from "./demo/hover-card";
import { InputDemo } from "./demo/input";
import { InputOTPDemo } from "./demo/input-otp";
import { LabelDemo } from "./demo/label";
import { MenubarDemo } from "./demo/menubar";
import { NavigationMenuDemo } from "./demo/navigation-menu";
import { PaginationDemo } from "./demo/pagination-demo";
import { PopoverDemo } from "./demo/popover";
import { ProgressDemo } from "./demo/progress";
import { RadioGroupDemo } from "./demo/radio-group";
import { ResizableDemo } from "./demo/resizable";
import { ScrollAreaDemo } from "./demo/scroll-area";
import { SelectDemo } from "./demo/select";
import { SeparatorDemo } from "./demo/separator";
import { SheetDemo } from "./demo/sheet";
import { SkeletonDemo } from "./demo/skeleton";
import { SliderDemo } from "./demo/slider";
import { SonnerDemo } from "./demo/sonner";
import { SwitchDemo } from "./demo/switch";
import { TableDemo } from "./demo/table";
import { TabsDemo } from "./demo/tabs";
import { TextareaDemo } from "./demo/textarea";
import { ToastDemo } from "./demo/toast";
import { ToggleDemo } from "./demo/toggle";
import { ToggleGroupDemo } from "./demo/toggle-group";
import { TooltipDemo } from "./demo/tooltip";
import { Badge } from "@/components/ui/badge";
import { ReactNode, useState } from "react";

const components = [
  { name: 'Accordion',         component: AccordionDemo         },
  { name: 'Alert',             component: AlertDemo             },
  { name: 'Alert Dialog',      component: AlertDialogDemo       },
  { name: 'Aspect Ratio',      component: AspectRatioDemo       },
  { name: 'Avatar',            component: AvatarDemo            },
  { name: 'Badge',             component: BadgeDemo             },
  { name: 'Breadcrumb',        component: BreadcrumbDemo        },
  { name: 'Button',            component: ButtonDemo            },
  { name: 'Calendar',          component: CalendarDemo          },
  { name: 'Card With Form',    component: CardWithForm          },
  { name: 'Carousel',          component: CarouselDemo          },
  { name: 'Chart',             component: ChartDemo             },
  { name: 'Checkbox',          component: CheckboxDemo          },
  { name: 'Collapsible',       component: CollapsibleDemo       },
  { name: 'Combobox',          component: ComboboxDemo          },
  { name: 'Command',           component: CommandDemo           },
  { name: 'Context Menu',      component: ContextMenuDemo       },
  { name: 'Date Picker',       component: DatePickerDemo        },
  { name: 'Dialog',            component: DialogDemo            },
  { name: 'Drawer',            component: DrawerDemo            },
  { name: 'Dropdown Menu',     component: DropdownMenuDemo      },
  { name: 'Form',              component: InputForm             },
  { name: 'Hover Card',        component: HoverCardDemo         },
  { name: 'Input',             component: InputDemo             },
  { name: 'Input OTP',         component: InputOTPDemo          },
  { name: 'Label',             component: LabelDemo             },
  { name: 'Menubar',           component: MenubarDemo           },
  { name: 'Navigation Menu',   component: NavigationMenuDemo    },
  { name: 'Pagination',        component: PaginationDemo        },
  { name: 'Popover',           component: PopoverDemo           },
  { name: 'Progress',          component: ProgressDemo          },
  { name: 'Radio Group',       component: RadioGroupDemo        },
  { name: 'Resizable',         component: ResizableDemo         },
  { name: 'Scroll Area',       component: ScrollAreaDemo        },
  { name: 'Select',            component: SelectDemo            },
  { name: 'Separator',         component: SeparatorDemo         },
  { name: 'Sheet',             component: SheetDemo             },
  { name: 'Skeleton',          component: SkeletonDemo          },
  { name: 'Slider',            component: SliderDemo            },
  { name: 'Sonner',            component: SonnerDemo            },
  { name: 'Switch',            component: SwitchDemo            },
  { name: 'Table',             component: TableDemo             },
  { name: 'Tabs',              component: TabsDemo              },
  { name: 'Textarea',          component: TextareaDemo          },
  { name: 'Toast',             component: ToastDemo             },
  { name: 'Toggle',            component: ToggleDemo            },
  { name: 'Toggle Group',      component: ToggleGroupDemo       },
  { name: 'Tooltip',           component: TooltipDemo           }
];

function ComponentContainer({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold">{title}</h2>
      <div className="">{children}</div>
    </div>
  );
}

export default function Home() {
  const [selectedComponents, setSelectedComponents] = useState(new Set());

  const toggleSelection = (name: string) => {
    const newSelection = new Set(selectedComponents);
    if (newSelection.has(name)) {
      newSelection.delete(name);
    } else {
      newSelection.add(name);
    }
    setSelectedComponents(newSelection);
  };

  return (
    <main className={`flex px-4 w-full justify-center min-h-screen h-full bg-white text-black dark:bg-zinc-900 dark:text-white space-y-4`}>
      <div className="container px-0 space-y-8">
        <header className="h-16 border-b flex justify-between items-center px-4">
          <h1 className="font-semibold tracking-widest">SHADCN COMPONENTS</h1>
          <ToggleDarkThemeButton />
        </header>
        <div className="flex flex-wrap gap-4">
          {components.map(({ name }) => (
            <Badge
              key={name}
              variant={selectedComponents.has(name) ? 'default' : 'secondary'}
              onClick={() => toggleSelection(name)}
              className="cursor-pointer"
            >
              {name}
            </Badge>
          ))}
        </div>
        <div className="space-y-4">
          {components.map(({ name, component: Component }) => (
            selectedComponents.has(name) && (
              <ComponentContainer key={name} title={name}>
                <Component />
              </ComponentContainer>
            )
          ))}
        </div>
      </div>
    </main>
  );
}