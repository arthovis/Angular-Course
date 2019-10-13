import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './features/typescript/typescript.component';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './features/data-binding/data-binding.component';
import { EventBindingComponent } from './features/event-binding/event-binding.component';
import { BuiltInDirectivesComponent } from './features/built-in-directives/built-in-directives.component';
import { CustomPipesComponent } from './features/custom-pipes/custom-pipes.component';
import { ComponentInteractionComponent } from './features/component-interaction/component-interaction.component';
import { TemplateDrivenComponent } from './features/forms/template-driven/template-driven.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { ModelDrivenComponent } from './features/forms/model-driven/model-driven.component';
import { appRoutesNames } from './app.routes.names';
import { ListUsersComponent } from './features/crud/list-users/list-users.component';
import { AddUserComponent } from './features/crud/add-user/add-user.component';

export const appRoutes: Routes = [
    { path: appRoutesNames.TYPESCRIPT, component: TypescriptComponent },
    { path: appRoutesNames.DATA_BINDING, component: DataBindingComponent },
    { path: appRoutesNames.EVENT_BINDING, component: EventBindingComponent },
    { path: appRoutesNames.BUILT_IN_DIRECTIVES, component: BuiltInDirectivesComponent },
    { path: appRoutesNames.CUSTOM_PIPES, component: CustomPipesComponent },
    { path: appRoutesNames.TEMPLATE_DRIVEN, component: TemplateDrivenComponent },
    { path: appRoutesNames.MODEL_DRIVEN, component: ModelDrivenComponent },
    { path: appRoutesNames.COMPONENT_INTERACTION, component: ComponentInteractionComponent },
    { path: appRoutesNames.NOTIFICATIONS, component: NotificationsComponent },
    { path: appRoutesNames.CRUD, component: ListUsersComponent },
    { path: appRoutesNames.ADD_USER, component: AddUserComponent },
    { path: appRoutesNames.LIST_USER, component: ListUsersComponent },
    { path: '', pathMatch: 'full', component: AppComponent }
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
